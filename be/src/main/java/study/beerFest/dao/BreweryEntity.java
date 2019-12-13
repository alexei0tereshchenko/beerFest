package study.beerFest.dao;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Brewery", schema = "beerFest", catalog = "")
public class BreweryEntity {
    private int idBrewery;
    private String breweryName;
    private String address;
    private CityEntity cityByIdCity;

    @Id
    @Column(name = "idBrewery", nullable = false)
    public int getIdBrewery() {
        return idBrewery;
    }

    public void setIdBrewery(int idBrewery) {
        this.idBrewery = idBrewery;
    }

    @Basic
    @Column(name = "BreweryName", nullable = false, length = 45)
    public String getBreweryName() {
        return breweryName;
    }

    public void setBreweryName(String breweryName) {
        this.breweryName = breweryName;
    }

    @Basic
    @Column(name = "Address", nullable = false, length = 45)
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BreweryEntity that = (BreweryEntity) o;
        return idBrewery == that.idBrewery &&
                Objects.equals(breweryName, that.breweryName) &&
                Objects.equals(address, that.address);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idBrewery, breweryName, address);
    }

    @ManyToOne
    @JoinColumn(name = "idCity", referencedColumnName = "idCity", nullable = false)
    public CityEntity getCityByIdCity() {
        return cityByIdCity;
    }

    public void setCityByIdCity(CityEntity cityByIdCity) {
        this.cityByIdCity = cityByIdCity;
    }
}
