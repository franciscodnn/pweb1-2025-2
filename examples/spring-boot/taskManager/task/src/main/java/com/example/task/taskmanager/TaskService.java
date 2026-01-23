package com.example.task.taskmanager;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final ObjectMapper mapper;

    public TaskService(
        TaskRepository taskRepository
        // ObjectMapper mapper
    ) {
        this.taskRepository = taskRepository;
        this.mapper = new ObjectMapper();
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

    public String updateViaPATCH(
        Long id, Task task
    ) {
        Task existingTask = this.taskRepository
                                .findById(id)
                                .orElse(null);
        
        if(existingTask != null) {
            try {
                this.mapper.setDefaultPropertyInclusion(JsonInclude.Include.NON_NULL);

                Task updatedTask = this.mapper.updateValue(existingTask, task);

                this.taskRepository.save(updatedTask);
            } catch(JsonMappingException jme) {
                System.out.println("Erro na desserialização!");
            }

            /*
            if(task.getTitle() != null) 
                existingTask.setTitle(task.getTitle());

            if(task.getDescription() != null)
                existingTask.setDescription(task.getDescription());

            if(task.getDue() != null) 
                existingTask.setDue(task.getDue());

            if(task.getLevel() != null)
                existingTask.setLevel(task.getLevel());

            if(task.getStatus() != null)
                existingTask.setStatus(task.getStatus());

            this.taskRepository.save(existingTask);
            */

            return "Objeto atualizado via PATCH";
        }

        return "Objeto com id inexistente";
    }
}
