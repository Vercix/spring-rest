package com.example.restservice;

import java.util.function.Consumer;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BobController {
	
	public interface I {
		public String message(String s);
	}
	
	@GetMapping("/")
	public String index(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
		
		System.out.println("Index!");
		return "bob";
	}
	
	@GetMapping("/bob")
	public String bob(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model) {
		I x = (p) -> {
			return "hello";
		};
		System.out.println("Hello!");
		return "bob";
	}

}