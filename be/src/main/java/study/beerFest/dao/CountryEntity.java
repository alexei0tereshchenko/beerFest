package study.beerFest.dao;

import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Proxy(lazy = false)
@Table(name = "Country", schema = "beerFest", catalog = "")
public class CountryEntity {
    private int idCountry;
    private String countryName;

    public CountryEntity() {
    }

    public CountryEntity(String countryName) {
        CountryEntity countryEntity = new CountryEntity();
        countryEntity.setCountryName(countryName);
    }

    @Id
    @Column(name = "idCountry", nullable = false)
    public int getIdCountry() {
        return idCountry;
    }

    public void setIdCountry(int idCountry) {
        this.idCountry = idCountry;
    }

    @Basic
    @Column(name = "CountryName", nullable = false, length = 45)
    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CountryEntity that = (CountryEntity) o;
        return idCountry == that.idCountry &&
                Objects.equals(countryName, that.countryName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCountry, countryName);
    }
}
