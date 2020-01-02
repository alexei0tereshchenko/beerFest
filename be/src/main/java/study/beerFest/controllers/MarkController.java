package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
import study.beerFest.dao.MarksEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.sql.Timestamp;
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

    @Transactional
    @RequestMapping(value = "/addMark", method = RequestMethod.POST)
    public MarksEntity addMark(@RequestBody MarksEntity marksEntity){
        marksEntity.setDate(new Timestamp(System.currentTimeMillis()));
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.persist(marksEntity);
        session.flush();
        session.close();
        return marksEntity;
    }

    @RequestMapping(value = "/editMark", method = RequestMethod.POST)
    public MarksEntity editMark(@RequestBody MarksEntity marksEntity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.update(marksEntity);
        session.flush();
        session.close();
        return marksEntity;
    }

    @RequestMapping(value = "/deleteMark", method = RequestMethod.POST)
    public MarksEntity deleteMark(@RequestBody MarksEntity marksEntity) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.delete(marksEntity);
        session.flush();
        session.close();
        return marksEntity;
    }
}
