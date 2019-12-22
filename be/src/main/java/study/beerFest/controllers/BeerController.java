package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.BeerEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class BeerController {

    @Transactional
    @RequestMapping(value = "/beer/{idBrewery}", method = RequestMethod.GET)
    public List<BeerEntity> getBeer(@PathVariable(value = "idBrewery") int idBrewery) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        return session.createQuery("select a from BeerEntity a " +
                "where breweryByIdBrewery.idBrewery = " + idBrewery, BeerEntity.class).getResultList();
    }

    @Transactional
    @RequestMapping("/beerByBeerStyle/{idBeerStyle}")
    public List<BeerEntity> getBeerByBeerStyle(@PathVariable(value = "idBeerStyle") int idBeerStyle) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        return session.createQuery("select a from BeerEntity a " +
                "where beerStyleByIdBeerStyle.idBeerStyle = " + idBeerStyle, BeerEntity.class).getResultList();
    }
}
