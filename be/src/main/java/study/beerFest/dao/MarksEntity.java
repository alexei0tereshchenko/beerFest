package study.beerFest.dao;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "Marks", schema = "beerFest", catalog = "")
public class MarksEntity {
    private Timestamp date;
    private int mark;
    private String comment;
    private TastersEntity tastersByIdTaster;
    private BeerEntity beerByIdBeer;

    @Id
    @Column(name = "Date", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm a z")
    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Basic
    @Column(name = "Mark", nullable = false)
    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }

    @Basic
    @Column(name = "Comment", nullable = true, length = 100)
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MarksEntity that = (MarksEntity) o;
        return mark == that.mark &&
                Objects.equals(date, that.date) &&
                Objects.equals(comment, that.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(date, mark, comment);
    }

    @ManyToOne
    @JoinColumn(name = "idTaster", referencedColumnName = "idTasters", nullable = false)
    public TastersEntity getTastersByIdTaster() {
        return tastersByIdTaster;
    }

    public void setTastersByIdTaster(TastersEntity tastersByIdTaster) {
        this.tastersByIdTaster = tastersByIdTaster;
    }

    @ManyToOne
    @JoinColumn(name = "idBeer", referencedColumnName = "idBeer", nullable = false)
    public BeerEntity getBeerByIdBeer() {
        return beerByIdBeer;
    }

    public void setBeerByIdBeer(BeerEntity beerByIdBeer) {
        this.beerByIdBeer = beerByIdBeer;
    }
}
