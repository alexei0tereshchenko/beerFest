package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.BeerStyleEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class BeerStyleController {

    @Transactional
    @RequestMapping("/beerStyles")
    public List<BeerStyleEntity> getBeerStyles() {
        List<BeerStyleEntity> beerStyleEntities;
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        beerStyleEntities = session.createQuery("select a from BeerStyleEntity a", BeerStyleEntity.class).getResultList();
        session.close();
        return beerStyleEntities;
    }

    @Transactional
    @RequestMapping(value = "/beerStyle/{idBeerStyle}", method = RequestMethod.GET)
    public BeerStyleEntity getBeerStyle(@PathVariable(value = "idBeerStyle") int idBeerStyle){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        BeerStyleEntity beerStyleEntity = session.get(BeerStyleEntity.class, idBeerStyle);
        session.close();
        return beerStyleEntity;
    }

    @Transactional
    @RequestMapping(value = "/addBeerStyle", method = RequestMethod.POST)
    public BeerStyleEntity addBeerStyle(@RequestBody BeerStyleEntity beerStyleEntity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.persist(beerStyleEntity);
        session.flush();
        session.close();
        return beerStyleEntity;
    }

    @RequestMapping(value = "/editBeerStyle", method = RequestMethod.POST)
    public BeerStyleEntity editBeerStyle(@RequestBody BeerStyleEntity beerStyleEntity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.update(beerStyleEntity);
        session.flush();
        session.close();
        return beerStyleEntity;
    }
}
