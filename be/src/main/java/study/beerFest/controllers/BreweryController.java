package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.BreweryEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
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
    public BreweryEntity getBrewery(@PathVariable(value = "idBrewery") int idBrewery){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        BreweryEntity breweryEntity = session.get(BreweryEntity.class, idBrewery);
        session.close();
        return breweryEntity;
    }
}
