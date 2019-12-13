package study.beerFest.controllers;

import org.hibernate.Session;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import study.beerFest.dao.TastersEntity;
import study.beerFest.utils.HibernateSessionFactory;

import java.sql.Timestamp;

@RestController
public class TasterController {

    @RequestMapping("/getTaster")
    public TastersEntity getTasterById(@RequestParam(value = "idTaster") int idTaster){
        Session session = HibernateSessionFactory.getSessionFactory().openSession();
        session.beginTransaction();
        TastersEntity tastersEntity = session.get(TastersEntity.class, idTaster);
        session.close();
        return tastersEntity;
    }

    @RequestMapping("/")
    public ModelAndView main(){
        //Session session = HibernateSessionFactory.getSessionFactory().openSession();
        //session.beginTransaction();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");

        TastersEntity taster = new TastersEntity();
        Timestamp birthDate = new Timestamp(0);
        taster.setBirthDate(birthDate);
        taster.setFirstName("Vladislav");
        taster.setLastName("Verenich");
        taster.setFullName("Vladislav Verenich");
        taster.setPhoneNumber("+375256785432");
        modelAndView.addObject("tasterJSP", taster/*session.get(TastersEntity.class, 1)*/);

        return modelAndView;
    }
}
