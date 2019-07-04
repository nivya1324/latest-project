package stepDefinitions;
import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)
public class TC_1_stepDefinition  {
	public WebDriver d;

	@Given("^User is on truVault login page$")
	public void user_is_on_facebook_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\nivychhabra\\Downloads\\chromedriver.exe");
		d= new ChromeDriver();

		//Creating object of login class

		d.get("https://login.veevavault.com/auth/login");	
		d.manage().window().maximize();
		d.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		System.out.println("Navigation to login url successful");


	}


    @When("^User enters \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_enters_something_and_password_something(String username, String password) throws Throwable {
		d.findElement(By.id("j_username")).sendKeys(username);
		d.findElement(By.name("continue")).click();
		d.findElement(By.name("j_password")).sendKeys(password);

	}
	
	@And("^click on submit$")
	public void click_on_submit() throws Throwable {
		d.findElement(By.name("login")).click();

	}

	 @Then("^Login value is \"([^\"]*)\"$")
	    public void login_value_is_something(String Arg1) throws Throwable { 
	    	
	    String val="true";
		if(Arg1.equalsIgnoreCase(val))
		{
			d.close();
			System.out.println("Login is successful");
		}
		else
		{
			String errorMessage= d.findElement(By.xpath("//div[@class='login-error-text']")).getText();
			System.out.println("Error: " + errorMessage);
			d.close();
		}
		

		
	}

}

