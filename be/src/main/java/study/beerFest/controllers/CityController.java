package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.CityEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class CityController {

    @Transactional
    @RequestMapping(value = "/cities/{idCountry}", method = RequestMethod.GET)
    @ResponseBody()
    public List<CityEntity> getCitiesByCountryId(@PathVariable(value = "idCountry") int idCountry) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<CityEntity> cityEntityList = session.createQuery("SELECT a from CityEntity a " +
                "where countryByIdCountry.idCountry = " + idCountry, CityEntity.class).getResultList();
        session.close();
        return cityEntityList;
    }

    @RequestMapping(value = "/addCity", method = RequestMethod.POST)
    public CityEntity addCity(@RequestBody CityEntity cityEntity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.persist(cityEntity);
        session.flush();
        session.close();
        return cityEntity;
    }

    @Transactional
    @RequestMapping(value = "/city/{idCity}", method = RequestMethod.GET)
    public CityEntity getCity(@PathVariable(value = "idCity") int idCity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        CityEntity cityEntity = session.get(CityEntity.class, idCity);
        session.close();
        return cityEntity;
    }

    @RequestMapping(value = "/editCity", method = RequestMethod.POST)
    public CityEntity editCity(@RequestBody CityEntity cityEntity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.update(cityEntity);
        session.flush();
        session.close();
        return cityEntity;
    }

    @RequestMapping(value = "/deleteCity", method = RequestMethod.POST)
    public CityEntity deleteCity(@RequestBody CityEntity cityEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.delete(cityEntity);
        session.flush();
        session.close();
        return cityEntity;
    }
}
