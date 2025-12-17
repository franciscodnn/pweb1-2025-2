package com.example.task.taskmanager;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> listAllTaks() {
        return this.taskRepository.findAll();
    }

    public String create(Task task) {
        this.taskRepository.save(task);
        
        return "Objeto criado com sucesso!";
    }
}
