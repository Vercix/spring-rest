package com.example.restservice;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ToDo implements Serializable {

	@Id
	@GeneratedValue
	private Long id;
	private String contents;

	private ToDo() {
	}

	public ToDo(String contents) {
		this.contents = contents;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		ToDo toDo = (ToDo) o;
		return Objects.equals(id, toDo.id) &&
				Objects.equals(contents, toDo.contents);

	}

	@Override
	public int hashCode() {
		return Objects.hash(id, contents);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	@Override
	public String toString() {
		return "Employee{" +
				"id=" + id +
				", contents='" + contents + '\'' +
				'}';
	}
}