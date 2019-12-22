package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.TastersEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class TasterController {

    @RequestMapping("/taster/{idTaster}")
    public TastersEntity getTasterById(@PathVariable(value = "idTaster") int idTaster) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        TastersEntity tastersEntity = session.get(TastersEntity.class, idTaster);
        session.close();
        return tastersEntity;
    }

    @Transactional
    @RequestMapping("/getTasters")
    public List<TastersEntity> getTasters() {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<TastersEntity> tastersEntities = session.createQuery("select a from TastersEntity a",
                TastersEntity.class).getResultList();
        session.close();
        return tastersEntities;
    }

    @Transactional
    @RequestMapping("/tasters/{idGroup}")
    public List<TastersEntity> getTastersByGroup(@PathVariable("idGroup") int idGroup) {
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        List<TastersEntity> tastersEntities = session.createQuery("select a from TastersEntity a " +
                "where groupByIdGroup.idGroup = " + idGroup, TastersEntity.class).getResultList();
        session.close();
        return tastersEntities;
    }
}
