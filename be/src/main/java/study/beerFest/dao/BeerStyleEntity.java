package study.beerFest.dao;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "BeerStyle", schema = "beerFest", catalog = "")
public class BeerStyleEntity {
    private int idBeerStyle;
    private String beerStyleName;

    @Id
    @Column(name = "idBeerStyle", nullable = false)
    public int getIdBeerStyle() {
        return idBeerStyle;
    }

    public void setIdBeerStyle(int idBeerStyle) {
        this.idBeerStyle = idBeerStyle;
    }

    @Basic
    @Column(name = "BeerStyleName", nullable = false, length = 45)
    public String getBeerStyleName() {
        return beerStyleName;
    }

    public void setBeerStyleName(String beerStyleName) {
        this.beerStyleName = beerStyleName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BeerStyleEntity that = (BeerStyleEntity) o;
        return idBeerStyle == that.idBeerStyle &&
                Objects.equals(beerStyleName, that.beerStyleName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idBeerStyle, beerStyleName);
    }
}
