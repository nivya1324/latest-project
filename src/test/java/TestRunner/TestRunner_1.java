package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "src/test/java" , glue= {"stepDefinitions"},
		plugin= {"html:target/cucumber-html-report" , "json:target/cucumber.json"}
		)

public class TestRunner_1 {

}
