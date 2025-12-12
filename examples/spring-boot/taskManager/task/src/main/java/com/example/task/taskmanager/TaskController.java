package com.example.task.taskmanager;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/taskmanager")
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/all")
    public String listAllTasks() {
        return this.taskService.listAllTaks();
    }

    /*
    @GetMapping("/{id}")
    public String getTaskById(@PathVariable Integer id) {

        return "Uma task apenas, com id: " + id;
    }
    */
   @GetMapping
   public String getTaskById(@RequestParam("id") Integer id,
@RequestParam("name") String name) {
    return "Task com id: " + id + " - " + name;
   }

}
