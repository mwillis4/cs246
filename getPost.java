package disscussionThread;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.FileReader;
/**
 * Servlet implementation class getPost
 */
@WebServlet("/getPost")
public class getPost extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public getPost() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String fileName = System.getenv("OPENSHIFT_DATA_DIR") + "/myDiscussion.txt";
		
		 try {
	            
	            // Location of of entry to be imported
	            BufferedReader in = new BufferedReader(new FileReader(fileName));
	            
	            // String that will contain items as they are brought in
	            String inString;
	            String returnString = "";
	            // Read in item
	            for(int i = 0; (inString = in.readLine()) != null; i++) {
	                returnString += inString;
	            }
	            
	            request.setAttribute("posts", returnString);
	        }
	        catch (IOException e) {
	            // Tell user if there are any errors
	            System.out.println("Doesn't Work");
	        }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
