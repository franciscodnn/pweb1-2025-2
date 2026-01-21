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

    public String remove(Long id) {
        Task task = this.taskRepository
                        .findById(id)
                        .orElse(null);

        if(task == null) return "Objeto inexistente";

        this.taskRepository.deleteById(id);

        return "Objeto removido";
    }

    public String updateViaPUT(Long id, Task task) {
        Task existingTask = this.taskRepository
                                .findById(id)
                                .orElse(null);

        if(existingTask != null) {
            /*
            existingTask.setDescription(task.getDescription());
            existingTask.setDescription(task.getDescription());
            existingTask.setDescription(task.getDescription());
            existingTask.setDescription(task.getDescription());
            existingTask.setDescription(task.getDescription());
            */
           task.setId(existingTask.getId());

           this.taskRepository.save(task);

           return "Objeto alterado via PUT";
        }

        return "Objeto inexistente";
    }
}
