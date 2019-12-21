package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.CityEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class CityController {

    @Transactional
    @RequestMapping(value = "/cities/{idCountry}", method = RequestMethod.GET)
    public List<CityEntity> getCitiesByCountryId(@PathVariable(value = "idCountry") int idCountry) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        return session.createQuery("SELECT a from CityEntity a " +
                "where countryByIdCountry.idCountry = " + idCountry, CityEntity.class).getResultList();
    }
}
