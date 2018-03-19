package hw.entity;

public class User {
    private String name;
    private int age;
    private String gender;
    private String profession;
    private String address;
    private String mobile;
    
    public User() {}
    
    public User(String name, int age, String gender, String profession,
            String address, String mobile) {
        super();
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.profession = profession;
        this.address = address;
        this.mobile = mobile;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getProfession() {
        return profession;
    }
    public void setProfession(String profession) {
        this.profession = profession;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
