package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.CountryEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
public class CountryController {

    @Transactional(value = Transactional.TxType.REQUIRES_NEW)
    @RequestMapping(value = "/getCountries", method = RequestMethod.GET)
    public List<CountryEntity> getCountries() {
        List<CountryEntity> countryEntities = new ArrayList<>();
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        for (var i = 1; session.get(CountryEntity.class, i) != null; i++) {
            countryEntities.add(session.get(CountryEntity.class, i));
        }
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
}
