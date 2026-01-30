package com.example.task.taskmanager;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Task>> listAllTasks() {
        List<Task> tasks = this.taskService.listAllTaks();

        /*
        Task temp = (Task) tasks.get(0);

        System.out.println(temp.getTitle());
        */
        return ResponseEntity.ok(tasks);
    }

    @PostMapping
    public ResponseEntity<String> createTask(@RequestBody Task task) {
        System.out.println(task);

        this.taskService.create(task);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .header("Resposta", "App Spring Boot")
                .body("Objeto armazenado com sucesso");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> remove(@PathVariable Long id) {
        return ResponseEntity.ok(this.taskService.remove(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateViaPUT(
        @PathVariable Long id,
        @RequestBody Task task
    ) {
        return ResponseEntity
                .status(HttpStatus.NO_CONTENT)
                .body(this.taskService.updateViaPUT(id, task));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> updateViaPATCH(
        @PathVariable Long id,
        @RequestBody Task task
    ) {
        return ResponseEntity
                .status(HttpStatus.NO_CONTENT)
                .body(this.taskService.updateViaPATCH(id, task));
    }
    
    /*
    @GetMapping("/{id}")
    public String getTaskById(@PathVariable Integer id) {

        return "Uma task apenas, com id: " + id;
    }
    */
   @GetMapping
   public ResponseEntity<String> getTaskById(@RequestParam(value = "id", required = false) Integer id,
@RequestParam(value = "name", required = false) String name) {
    return ResponseEntity.ok("Task com id: " + id + " - " + name);
   }

}
