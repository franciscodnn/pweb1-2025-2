package com.example.task.taskmanager;

import org.springframework.stereotype.Service;

@Service
public class TaskService {
    public String listAllTaks() {
        return "Todas as tasks cadastradas";
    }
}
