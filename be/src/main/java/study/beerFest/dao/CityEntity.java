package study.beerFest.dao;

import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Proxy(lazy = false)
@Table(name = "City", schema = "beerFest", catalog = "")
public class CityEntity {
    private int idCity;
    private String cityName;
    private CountryEntity countryByIdCountry;

    @Id
    @Column(name = "idCity", nullable = false)
    public int getIdCity() {
        return idCity;
    }

    public void setIdCity(int idCity) {
        this.idCity = idCity;
    }

    @Basic
    @Column(name = "CityName", nullable = false, length = 45)
    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CityEntity that = (CityEntity) o;
        return idCity == that.idCity &&
                Objects.equals(cityName, that.cityName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCity, cityName);
    }

    @ManyToOne
    @JoinColumn(name = "idCountry", referencedColumnName = "idCountry", nullable = false)
    public CountryEntity getCountryByIdCountry() {
        return countryByIdCountry;
    }

    public void setCountryByIdCountry(CountryEntity countryByIdCountry) {
        this.countryByIdCountry = countryByIdCountry;
    }
}
