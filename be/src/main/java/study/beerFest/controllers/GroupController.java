package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.beerFest.dao.GroupEntity;
import study.beerFest.utils.HibernateSessionFactory;

import javax.transaction.Transactional;
import java.util.List;

@RestController
public class GroupController {

    @Transactional(value = Transactional.TxType.REQUIRES_NEW)
    @RequestMapping("/getGroups")
    public List<GroupEntity> getGroups() {
        List<GroupEntity> groupEntities;
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        groupEntities = session.createQuery("select a from GroupEntity a", GroupEntity.class).getResultList();
        session.close();
        return groupEntities;
    }
}
