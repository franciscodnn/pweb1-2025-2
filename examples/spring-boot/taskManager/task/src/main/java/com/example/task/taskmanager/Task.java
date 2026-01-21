package com.example.task.taskmanager;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tasks")
@NoArgsConstructor
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "due")
    private String due;

    @Column(name = "level")
    private String level;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private String status;
    
    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

}
