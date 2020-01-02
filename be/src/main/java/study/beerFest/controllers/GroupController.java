package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.*;
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

    @Transactional
    @RequestMapping("/group/{idGroup}")
    public GroupEntity getGroup(@PathVariable("idGroup") int idGroup){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        GroupEntity groupEntity = session.get(GroupEntity.class, idGroup);
        session.close();
        return groupEntity;
    }

    @Transactional
    @RequestMapping(value = "/addGroup", method = RequestMethod.POST)
    public GroupEntity addGroup(@RequestBody GroupEntity groupEntity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.persist(groupEntity);
        session.flush();
        session.close();
        return groupEntity;
    }

    @RequestMapping(value = "/editGroup", method = RequestMethod.POST)
    public GroupEntity editGroup(@RequestBody GroupEntity groupEntity){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        session.update(groupEntity);
        session.flush();
        session.close();
        return groupEntity;
    }
}
