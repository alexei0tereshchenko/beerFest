package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.BreweryEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;

@RestController
public class BreweryController {

    @Transactional(value = Transactional.TxType.REQUIRES_NEW)
    @RequestMapping("/getBreweries")
    public List<BreweryEntity> getAllBreweries() {
        List<BreweryEntity> breweryEntities;
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        breweryEntities = session.createQuery("SELECT a from BreweryEntity a", BreweryEntity.class).getResultList();
        session.close();
        breweryEntities.sort(Comparator.comparing(BreweryEntity::getBreweryName));
        return breweryEntities;
    }

    @Transactional
    @RequestMapping(value = "/breweries/{idCity}", method = RequestMethod.GET)
    public List<BreweryEntity> getBreweriesByIdCity(@PathVariable(value = "idCity") int idCity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<BreweryEntity> breweryEntities = session.createQuery("select a from BreweryEntity a " +
                "where city.idCity = " + idCity, BreweryEntity.class).getResultList();
        session.close();
        return breweryEntities;
    }

    @Transactional
    @RequestMapping(value = "/brewery/{idBrewery}", method = RequestMethod.GET)
    public BreweryEntity getBrewery(@PathVariable(value = "idBrewery") int idBrewery) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        BreweryEntity breweryEntity = session.get(BreweryEntity.class, idBrewery);
        session.close();
        return breweryEntity;
    }

    @Transactional
    @RequestMapping(value = "/addBrewery", method = RequestMethod.POST)
    public BreweryEntity addBrewery(@RequestBody BreweryEntity breweryEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.persist(breweryEntity);
        session.flush();
        session.close();
        return breweryEntity;
    }

    @RequestMapping(value = "/editBrewery", method = RequestMethod.POST)
    public BreweryEntity editBrewery(@RequestBody BreweryEntity breweryEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.update(breweryEntity);
        session.flush();
        session.close();
        return breweryEntity;
    }

    @RequestMapping(value = "/deleteBrewery", method = RequestMethod.POST)
    public BreweryEntity deleteBrewery(@RequestBody BreweryEntity breweryEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.delete(breweryEntity);
        session.flush();
        session.close();
        return breweryEntity;
    }
}
