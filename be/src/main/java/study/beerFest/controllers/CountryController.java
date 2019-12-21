package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.CountryEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;

@RestController
public class CountryController {

    @Transactional(value = Transactional.TxType.REQUIRES_NEW)
    @RequestMapping(value = "/getCountries", method = RequestMethod.GET)
    public List<CountryEntity> getCountries() {
        List<CountryEntity> countryEntities;
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        countryEntities = session.createQuery("select a from CountryEntity a", CountryEntity.class).getResultList();
        countryEntities.sort(Comparator.comparingInt(CountryEntity::getIdCountry));
        session.close();
        return countryEntities;
    }

    @RequestMapping(value = "/addNewCountry", method = RequestMethod.POST)
    public CountryEntity addNewCountry(@RequestBody CountryEntity country) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.persist(country);
        session.flush();
        session.close();
        return country;
    }

    @RequestMapping(value = "/country/{idCountry}", method = RequestMethod.GET)
    public CountryEntity getCountry(@PathVariable(value = "idCountry") int idCountry){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        CountryEntity countryEntity = session.get(CountryEntity.class, idCountry);
        session.close();
        return countryEntity;
    }
}
