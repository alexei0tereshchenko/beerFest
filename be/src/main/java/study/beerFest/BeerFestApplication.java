package study.beerFest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeerFestApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeerFestApplication.class, args);

	/*	Session session = HibernateSessionFactory.getSessionFactory().openSession();
		session.beginTransaction();
		CityEntity cityEntity = session.get(CityEntity.class, 1);
		cityEntity.getCityName();
		session.close();*/
	}

}
