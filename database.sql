
DROP TABLE Player;
DROP TABLE Parent;
DROP TABLE Court;
DROP TABLE Class;
DROP TABLE Students;
DROP TABLE Reservation;

CREATE TABLE Player
(playerID		CHAR(8)			NOT NULL
,FullName		VARCHAR(50)  	NOT NULL
,DOB			   DATE			   NOT NULL
,Sex           CHAR(5)        
,SkillLevel    CHAR(8)
,Allergies     VARCHAR(50)
,ECN           varchar(15)    NOT NULL
,CONSTRAINT PKPlayer PRIMARY KEY (playerID)
);

CREATE TABLE Parent
(playerID		CHAR(8)			NOT NULL
,Relationship  VARCHAR(50)  	NOT NULL
,FullName	   VARCHAR(50)   NOT NULL
,PhoneNumber   varchar(15)    NOT NULL
,Email         VARCHAR(50)   NOT NULL
,Address       VARCHAR(50)   NOT NULL
,Insurance     VARCHAR(50)
,CONSTRAINT PKParent PRIMARY KEY (playerID, Relationship)
,CONSTRAINT FKParent
    FOREIGN KEY (playerID) REFERENCES Player (playerID)
       ON DELETE CASCADE 
);

CREATE TABLE Court
(ScheduledTime    CHAR(8)        NOT NULL
,BookingStatus    VARCHAR(20)   NOT NULL
,CONSTRAINT PKCourt PRIMARY KEY (ScheduledTime)
);

CREATE TABLE Class
(ClassID		CHAR(8)			   NOT NULL
,Instructor		VARCHAR(20)	NOT NULL
,Level			VARCHAR(20)	NOT NULL
,TotalNumber	INT				NOT NULL
,CurrentNumber	INT   DEFAULT 0		NOT NULL
,ScheduledTime DATE           NOT NULL
,CONSTRAINT PKClass PRIMARY KEY (classID, ScheduledTime)
,CONSTRAINT FKClass
    FOREIGN KEY (ScheduledTime) REFERENCES Court (ScheduledTime)
       ON DELETE CASCADE 
);

CREATE TABLE Students
(ClassID		CHAR(8)			   NOT NULL
,playerID   CHAR(8)			   NOT NULL
,CONSTRAINT PKStudents PRIMARY KEY (classID, playerID)
,CONSTRAINT FKStudentsClass
    FOREIGN KEY (ClassID) REFERENCES Class (ClassID)
       ON DELETE CASCADE 
,CONSTRAINT FKStudentsPlayer
    FOREIGN KEY (playerID) REFERENCES Player (playerID)
       ON DELETE CASCADE 
);

CREATE TABLE Reservation
(ScheduledTime    CHAR(8)     NOT NULL
,playerID         CHAR(8)     NOT NULL
,CONSTRAINT PKCReservation PRIMARY KEY (ScheduledTime)
,CONSTRAINT FKReservation
    FOREIGN KEY (ScheduledTime) REFERENCES Court (ScheduledTime)
       ON DELETE CASCADE 
,CONSTRAINT FKSReservation
    FOREIGN KEY (playerID) REFERENCES Player (playerID)
       ON DELETE CASCADE 
);


