package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.BeerStyleEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class BeerStyleController {

    @Transactional
    @RequestMapping("/beerStyles")
    public List<BeerStyleEntity> getBeerStyles() {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        return session.createQuery("select a from BeerStyleEntity a", BeerStyleEntity.class).getResultList();
    }
}
