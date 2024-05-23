package cn.luixtech.springbootsample;

import com.luixtech.springbootframework.EnableLuixSpringBootFramework;
import com.vaadin.flow.component.page.AppShellConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@EnableLuixSpringBootFramework
public class SpringBootSampleApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootSampleApplication.class, args);
    }

}
