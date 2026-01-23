package com.example.task.taskmanager;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/taskmanager")
@CrossOrigin(origins = {"http://localhost:4200/"} )
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // http://localhost:8080/api/taskmanager/all
    @GetMapping("/all")
    public List<Task> listAllTasks() {
        List<Task> tasks = this.taskService.listAllTaks();

        /*
        Task temp = (Task) tasks.get(0);

        System.out.println(temp.getTitle());
        */
        return tasks;
    }

    @PostMapping
    public String createTask(@RequestBody Task task) {
        System.out.println(task);

        this.taskService.create(task);

        return "Objeto armazenado com sucesso";
    }

    @DeleteMapping("/{id}")
    public String remove(@PathVariable Long id) {
        return this.taskService.remove(id);
    }

    @PutMapping("/{id}")
    public String updateViaPUT(
        @PathVariable Long id,
        @RequestBody Task task
    ) {
        return this.taskService.updateViaPUT(id, task);
    }

    @PatchMapping("/{id}")
    public String updateViaPATCH(
        @PathVariable Long id,
        @RequestBody Task task
    ) {
        return this.taskService.updateViaPATCH(id, task);
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
