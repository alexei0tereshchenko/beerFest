package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.CountryEntity;
import study.beerFest.utils.HibernateSessionFactory;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CountryController {

    @RequestMapping(value = "/getCountries", method = RequestMethod.GET)
    public List<CountryEntity> getCountries() {
        List<CountryEntity> countryEntities = new ArrayList<>();
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        for (var i = 1; session.get(CountryEntity.class, i) != null; i++) {
            countryEntities.add(session.get(CountryEntity.class, i));
        }
        return countryEntities;
    }

}
