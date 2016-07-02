package disscussionThread;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;


/**
 * Servlet implementation class createPost
 */
@WebServlet("/createPost")
public class createPost extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public createPost() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String subject = request.getParameter("subject");
        String content = request.getParameter("content");

        String saveString = "<tr><td>";
        saveString += request.getSession().getAttribute("username");
        saveString += "</td><td>" + subject + "</td><td>" + content + "</td></tr>";
        
        String fileName = System.getenv("OPENSHIFT_DATA_DIR") + "/myDiscussion.txt";
        
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true));
            writer.write(saveString);
            writer.close(); 

       } catch (IOException e) {
            e.printStackTrace();
       }
        
        response.sendRedirect("allPosts.jsp"); 
    }
    
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		processRequest(request, response);
	}

}
