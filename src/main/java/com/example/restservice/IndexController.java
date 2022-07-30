package com.example.restservice;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class IndexController {
	
	public interface I {
		public String message(String s);
	}
	
	@GetMapping("/")
	public String index(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
		return "index";
	}
}