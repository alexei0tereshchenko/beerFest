package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.BreweryEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BreweryController {

    @Transactional(value = Transactional.TxType.REQUIRES_NEW)
    @RequestMapping("/getBreweries")
    public List<BreweryEntity> getAllBreweries(){
        List<BreweryEntity> breweryEntities = new ArrayList<>();
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        for (var i = 1; session.get(BreweryEntity.class, i) != null; i++) {
            BreweryEntity breweryEntity = session.get(BreweryEntity.class, i);
            breweryEntities.add(breweryEntity);
        }
        session.close();
        return breweryEntities;
    }
}
