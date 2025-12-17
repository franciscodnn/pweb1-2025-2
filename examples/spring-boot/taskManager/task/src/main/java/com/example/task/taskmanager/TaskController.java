package com.example.task.taskmanager;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/taskmanager")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // http://localhost:8080/api/taskmanager/all
    @GetMapping("/all")
    public List<Task> listAllTasks() {
        return this.taskService.listAllTaks();
    }

    @PostMapping
    public String createTask(@RequestBody Task task) {
        System.out.println(task);

        // this.taskService.create(task);

        return "Objeto armazenado com sucesso";
    }
    

    /*
    @GetMapping("/{id}")
    public String getTaskById(@PathVariable Integer id) {

        return "Uma task apenas, com id: " + id;
    }
    */
   @GetMapping
   public String getTaskById(@RequestParam(value = "id", required = false) Integer id,
@RequestParam(value = "name", required = false) String name) {
    return "Task com id: " + id + " - " + name;
   }

}
