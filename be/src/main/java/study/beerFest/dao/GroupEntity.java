package study.beerFest.dao;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "`Groups`", schema = "beerFest", catalog = "")
public class GroupEntity {
    private int idGroup;
    private String groupName;

    @Id
    @Column(name = "idGroup", nullable = false)
    public int getIdGroup() {
        return idGroup;
    }

    public void setIdGroup(int idGroup) {
        this.idGroup = idGroup;
    }

    @Basic
    @Column(name = "GroupName", nullable = false, length = 45)
    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GroupEntity that = (GroupEntity) o;
        return idGroup == that.idGroup &&
                Objects.equals(groupName, that.groupName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idGroup, groupName);
    }
}
