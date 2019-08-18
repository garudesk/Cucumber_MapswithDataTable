package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		 
		features = "C:\\Eclips instalation setup\\Cucumber_MapswithDataTable\\Feature\\deals.feature",
		glue = "StepDef",
		monochrome = true,
		plugin = {"pretty","html:Report-output"},
		dryRun = false

		
		)



public class TestRunner {

}
