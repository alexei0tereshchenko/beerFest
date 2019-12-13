package study.beerFest.dao;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "Tasters", schema = "beerFest", catalog = "")
public class TastersEntity {
    private int idTasters;
    private String firstName;
    private String lastName;
    private String fullName;
    private String phoneNumber;
    private Timestamp birthDate;
    private GroupEntity groupByIdGroup;

    @Id
    @Column(name = "idTasters", nullable = false)
    public int getIdTasters() {
        return idTasters;
    }

    public void setIdTasters(int idTasters) {
        this.idTasters = idTasters;
    }

    @Basic
    @Column(name = "FirstName", nullable = false, length = 45)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "LastName", nullable = false, length = 45)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "FullName", nullable = true, length = 45)
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Basic
    @Column(name = "PhoneNumber", nullable = false, length = 45)
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Basic
    @Column(name = "BirthDate", nullable = false)
    public Timestamp getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Timestamp birthDate) {
        this.birthDate = birthDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TastersEntity that = (TastersEntity) o;
        return idTasters == that.idTasters &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(fullName, that.fullName) &&
                Objects.equals(phoneNumber, that.phoneNumber) &&
                Objects.equals(birthDate, that.birthDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTasters, firstName, lastName, fullName, phoneNumber, birthDate);
    }

    @ManyToOne
    @JoinColumn(name = "idGroup", referencedColumnName = "idGroup")
    public GroupEntity getGroupByIdGroup() {
        return groupByIdGroup;
    }

    public void setGroupByIdGroup(GroupEntity groupByIdGroup) {
        this.groupByIdGroup = groupByIdGroup;
    }
}
