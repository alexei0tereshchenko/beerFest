package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.MarksEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class MarkController {

    @Transactional
    @RequestMapping("/marksByTaster/{idTaster}")
    public List<MarksEntity> getMarksByTaster(@PathVariable("idTaster") int idTater){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<MarksEntity> marksEntities = session.createQuery("select a from MarksEntity a " +
                "where tastersByIdTaster.idTasters = " + idTater, MarksEntity.class).getResultList();
        session.close();
        return marksEntities;
    }

    @Transactional
    @RequestMapping("/marksByBeer/{idBeer}")
    public List<MarksEntity> getMarksByBeer(@PathVariable("idBeer") int idBeer){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<MarksEntity> marksEntities = session.createQuery("select a from MarksEntity a where " +
                "beerByIdBeer.idBeer = " + idBeer, MarksEntity.class).getResultList();
        session.close();
        return marksEntities;
    }
}
