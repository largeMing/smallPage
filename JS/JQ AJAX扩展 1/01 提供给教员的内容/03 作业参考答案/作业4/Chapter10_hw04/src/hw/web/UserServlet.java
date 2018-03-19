package hw.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UserServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setCharacterEncoding("UTF-8");
        String userJsonStr = "[ { \"name\":\"汪洋\","
                + " \"age\":21,"
                + " \"gender\":\"男\","
                + " \"profession\":\"学生\","
                + " \"address\":\"北京市海淀区上地西里3号楼4单元5号\","
                + " \"mobile\":\"13X00000000\""
        		+ " } ]";
        PrintWriter out = response.getWriter();
        out.print(userJsonStr);
        out.flush();
        out.close();
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");
        this.doGet(request, response);
    }

}
