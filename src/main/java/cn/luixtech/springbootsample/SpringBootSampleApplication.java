package cn.luixtech.springbootsample;

import com.luixtech.springbootframework.EnableLuixSpringBootFramework;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.theme.Theme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@EnableLuixSpringBootFramework
//@Theme(value = "spring-boot-sample")
public class SpringBootSampleApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootSampleApplication.class, args);
    }

}
