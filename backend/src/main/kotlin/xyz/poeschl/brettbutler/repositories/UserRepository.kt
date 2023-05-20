package xyz.poeschl.brettbutler.repositories

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import jakarta.validation.constraints.Size
import org.hibernate.Hibernate
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : CrudRepository<User, Long>

@Entity
@Table(name = "users")
data class User(
        @Id val id: Long,
        @Size(max = 100) val username: String
) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || Hibernate.getClass(this) != Hibernate.getClass(other)) return false
        other as User

        return id == other.id
    }

    override fun hashCode(): Int = javaClass.hashCode()
    @Override
    override fun toString(): String {
        return this::class.simpleName + "(id = $id )"
    }
}
