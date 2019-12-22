package study.beerFest.dao;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "Beer", schema = "beerFest", catalog = "")
public class BeerEntity {
    private int idBeer;
    private String beerName;
    private BigDecimal alcVol;
    private BreweryEntity breweryByIdBrewery;
    private BeerStyleEntity beerStyleByIdBeerStyle;
    private BigDecimal avgMark;

    public BigDecimal getAvgMark() {
        return avgMark;
    }

    public void setAvgMark(BigDecimal avgMark) {
        this.avgMark = avgMark;
    }

    @Id
    @Column(name = "idBeer", nullable = false)
    public int getIdBeer() {
        return idBeer;
    }

    public void setIdBeer(int idBeer) {
        this.idBeer = idBeer;
    }

    @Basic
    @Column(name = "BeerName", nullable = false, length = 45)
    public String getBeerName() {
        return beerName;
    }

    public void setBeerName(String beerName) {
        this.beerName = beerName;
    }

    @Basic
    @Column(name = "AlcVol", nullable = false, precision = 2)
    public BigDecimal getAlcVol() {
        return alcVol;
    }

    public void setAlcVol(BigDecimal alcVol) {
        this.alcVol = alcVol;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BeerEntity that = (BeerEntity) o;
        return idBeer == that.idBeer &&
                Objects.equals(beerName, that.beerName) &&
                Objects.equals(alcVol, that.alcVol);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idBeer, beerName, alcVol);
    }

    @ManyToOne
    @JoinColumn(name = "idBrewery", referencedColumnName = "idBrewery", nullable = false)
    public BreweryEntity getBreweryByIdBrewery() {
        return breweryByIdBrewery;
    }

    public void setBreweryByIdBrewery(BreweryEntity breweryByIdBrewery) {
        this.breweryByIdBrewery = breweryByIdBrewery;
    }

    @ManyToOne
    @JoinColumn(name = "idBeerStyle", referencedColumnName = "idBeerStyle", nullable = false)
    public BeerStyleEntity getBeerStyleByIdBeerStyle() {
        return beerStyleByIdBeerStyle;
    }

    public void setBeerStyleByIdBeerStyle(BeerStyleEntity beerStyleByIdBeerStyle) {
        this.beerStyleByIdBeerStyle = beerStyleByIdBeerStyle;
    }
}
