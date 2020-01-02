package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.BeerEntity;
import study.beerFest.dao.MarksEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class BeerController {

    @Transactional
    @RequestMapping(value = "/beerByBrewery/{idBrewery}", method = RequestMethod.GET)
    public List<BeerEntity> getBeerByBrewery(@PathVariable(value = "idBrewery") int idBrewery) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<BeerEntity> beerEntities = session.createQuery("select a from BeerEntity a " +
                "where breweryByIdBrewery.idBrewery = " + idBrewery, BeerEntity.class).getResultList();
        session.close();
        return beerEntities;
    }

    @Transactional
    @RequestMapping("/beerByBeerStyle/{idBeerStyle}")
    public List<BeerEntity> getBeerByBeerStyle(@PathVariable(value = "idBeerStyle") int idBeerStyle) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<BeerEntity> beerEntities = session.createQuery("select a from BeerEntity a " +
                "where beerStyleByIdBeerStyle.idBeerStyle = " + idBeerStyle, BeerEntity.class).getResultList();
        session.close();
        return beerEntities;
    }

    @Transactional
    @RequestMapping("/beer/{idBeer}")
    public BeerEntity getBeer(@PathVariable("idBeer") int idBeer) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        BeerEntity beerEntity = session.get(BeerEntity.class, idBeer);
        session.close();
        return beerEntity;
    }

    @Transactional
    @RequestMapping("/rating")
    public List<BeerEntity> getRating() {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<BeerEntity> beerEntities = session.createQuery("select a from BeerEntity a", BeerEntity.class).getResultList();
        List<MarksEntity> marksEntities = session.createQuery("select a from MarksEntity a", MarksEntity.class).getResultList();
        session.close();
        beerEntities.forEach(beerEntity -> {
            List<Integer> marksForBeer = marksEntities.stream()
                    .filter(marksEntity -> marksEntity.getBeerByIdBeer().getIdBeer() == beerEntity.getIdBeer())
                    .map(MarksEntity::getMark)
                    .collect(Collectors.toList());
            if (marksForBeer.size() > 0) {
                var sum = marksForBeer.stream().mapToInt(mark -> mark).sum();
                beerEntity.setAvgMark(new BigDecimal((double) sum / marksForBeer.size()));
            } else beerEntity.setAvgMark(BigDecimal.valueOf(0));
        });
        beerEntities.sort(Comparator.comparing(BeerEntity::getAvgMark));
        Collections.reverse(beerEntities);
        return beerEntities;
    }

    @Transactional
    @RequestMapping(value = "/addBeer", method = RequestMethod.POST)
    public BeerEntity addBeer(@RequestBody BeerEntity beerEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.persist(beerEntity);
        session.flush();
        session.close();
        return beerEntity;
    }

    @Transactional
    @RequestMapping("/getBeers")
    public List<BeerEntity> getBeers() {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<BeerEntity> beerEntities = session.createQuery("select a from BeerEntity a", BeerEntity.class).getResultList();
        session.close();
        return beerEntities;
    }

    @RequestMapping(value = "/editBeer", method = RequestMethod.POST)
    public BeerEntity editBeer(@RequestBody BeerEntity beerEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.update(beerEntity);
        session.flush();
        session.close();
        return beerEntity;
    }

    @RequestMapping(value = "/deleteBeer", method = RequestMethod.POST)
    public BeerEntity deleteBeer(@RequestBody BeerEntity beerEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.delete(beerEntity);
        session.flush();
        session.close();
        return beerEntity;
    }
}
