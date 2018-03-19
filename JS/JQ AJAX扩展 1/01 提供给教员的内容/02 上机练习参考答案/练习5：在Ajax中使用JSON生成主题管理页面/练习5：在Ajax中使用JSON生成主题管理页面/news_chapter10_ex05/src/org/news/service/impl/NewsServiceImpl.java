package org.news.service.impl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.news.dao.NewsDao;
import org.news.dao.impl.NewsDaoImpl;
import org.news.entity.News;
import org.news.service.NewsService;
import org.news.util.DatabaseUtil;
import org.news.util.Page;

public class NewsServiceImpl implements NewsService {

    @Override
    public List<News> findAllNews() throws SQLException {
        Connection conn = null;
        try {
            conn = DatabaseUtil.getConnection();

            return new NewsDaoImpl(conn).getAllnews();
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        } finally {
            DatabaseUtil.closeAll(conn, null, null);
        }
    }

    @Override
    public List<News> findAllNewsByTid(int tid) throws SQLException {
        Connection conn = null;
        try {
            conn = DatabaseUtil.getConnection();

            return new NewsDaoImpl(conn).getAllnewsByTID(tid);
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        } finally {
            DatabaseUtil.closeAll(conn, null, null);
        }
    }

    @Override
    public List<News> findAllNewsByTname(String tname) throws SQLException {
        Connection conn = null;
        try {
            conn = DatabaseUtil.getConnection();

            return new NewsDaoImpl(conn).getAllnewsByTname(tname);
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        } finally {
            DatabaseUtil.closeAll(conn, null, null);
        }
    }

    @Override
    public List<News> findLatestNewsByTid(int tid, int limit)
            throws SQLException {
        Connection conn = null;
        try {
            conn = DatabaseUtil.getConnection();

            return new NewsDaoImpl(conn).getLatestNewsByTID(tid, limit);
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        } finally {
            DatabaseUtil.closeAll(conn, null, null);
        }
    }

    @Override
    public List<List<News>> findLatestNewsByTid(Map<Integer, Integer> topicsMap)
            throws SQLException {
        Connection conn = null;
        try {
            List<List<News>> result = null;
            if (topicsMap != null && topicsMap.size() != 0) {
                conn = DatabaseUtil.getConnection();
                NewsDao newsDao = new NewsDaoImpl(conn);

                result = new ArrayList<List<News>>();
                Iterator<Entry<Integer, Integer>> topics = topicsMap.entrySet()
                        .iterator();
                while (topics.hasNext()) {
                    Entry<Integer, Integer> oneTopic = topics.next();
                    result.add(newsDao.getLatestNewsByTID(oneTopic.getKey(),
                            oneTopic.getValue()));
                }
            }
            return result;
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        } finally {
            DatabaseUtil.closeAll(conn, null, null);
        }
    }

    @Override
    public News findNewsByNid(int nid) throws SQLException {
        Connection conn = null;
        try {
            conn = DatabaseUtil.getConnection();

            return new NewsDaoImpl(conn).getNewsByNID(nid);
        } catch (SQLException e) {
            e.printStackTrace();
            throw e;
        } finally {
            DatabaseUtil.closeAll(conn, null, null);
        }
    }

    // 分页获取新闻
    public void findPageNews(Page pageObj) throws SQLException {
        Connection conn = null;
        try {
            conn = DatabaseUtil.getConnection();

            NewsDao newsDao = new NewsDaoImpl(conn);
            int totalCount = newsDao.getTotalCount();
            pageObj.setTotalCount(totalCount); // 设置总数量并计算总页数
            if (totalCount > 0) {
                if (pageObj.getCurrPageNo() > pageObj.getTotalPageCount())
                    pageObj.setCurrPageNo(pageObj.getTotalPageCount());
                List<News> newsList = newsDao.getPageNewsList(
                        pageObj.getCurrPageNo(), pageObj.getPageSize());
                pageObj.setNewsList(newsList);
            } else {
                pageObj.setCurrPageNo(0);
                pageObj.setNewsList(new ArrayList<News>());
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DatabaseUtil.closeAll(conn, null, null);
        }
    }

}
