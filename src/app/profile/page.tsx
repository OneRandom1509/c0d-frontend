"use client";
import React from "react";
import Text from "~/components/text";
import Button from "~/components/button";

const ProfilePage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-black p-16 text-white">
      {/* Left Side: Team Info */}
      <div className="flex w-1/2 flex-col space-y-8 pr-16">
        {/* Team Name and Details */}
        <div className="flex flex-col">
          <Text
            className="glow-primary text-4xl font-bold text-red-500"
            glow="primary"
          >
            TEAM NAME
          </Text>
          <Text className="text-lg text-gray-400">
            View your team details here
          </Text>
        </div>

        {/* Team Position */}
        <div className="flex flex-col space-y-2">
          <Text className="text-2xl" variant="white">
            HECKING
          </Text>
          <Text className="text-2xl" variant="white">
            LAST
          </Text>
          <Text className="text-2xl" variant="white">
            BRUH
          </Text>
          <Text className="text-lg text-gray-400">Team Position</Text>
        </div>

        {/* Team Members */}
        <div className="flex flex-col space-y-4 py-4">
          {["TEAM MEMBER1", "TEAM MEMBER2", "TEAM MEMBER3", "TEAM MEMBER4"].map(
            (member) => (
              <div key={member} className="flex justify-between">
                <Text className="text-lg" variant="white">
                  {member}
                </Text>
                <Text className="text-lg text-gray-400">SOLVED COUNT</Text>
              </div>
            ),
          )}
        </div>

        {/* Report a Bug Button */}
        <div>
          <Button variant="tertiary">REPORT A BUG</Button>
        </div>
      </div>

      {/* Right Side: Stats */}
      <div className="flex w-1/2 flex-col space-y-12 pl-16">
        {/* Type Breakdown */}
        <div className="flex flex-col space-y-4">
          <Text className="text-lg text-gray-400">Type Breakdown</Text>
          {["WEB", "BINARY", "FORENSICS", "OSINT"].map((type) => (
            <div key={type} className="flex justify-between">
              <Text className="text-lg" variant="white">
                {type}
              </Text>
              <Text className="text-lg" variant="white">
                10
              </Text>
            </div>
          ))}
        </div>

        {/* Difficulty Breakdown */}
        <div className="flex flex-col space-y-4">
          <Text className="text-lg text-gray-400">Difficulty Breakdown</Text>
          {["EASY", "MEDIUM", "HARD", "INSANE"].map((difficulty) => (
            <div key={difficulty} className="flex justify-between">
              <Text className="text-lg" variant="white">
                {difficulty}
              </Text>
              <Text className="text-lg" variant="white">
                10
              </Text>
            </div>
          ))}
        </div>

        {/* Bottom Buttons: Delete Team and Delete Profile */}
        <div className="flex justify-between">
          <Button className="mr-8 w-1/2" variant="secondary">
            DELETE YOUR TEAM
          </Button>
          <Button className="ml-8 w-1/2" variant="secondary">
            DELETE YOUR PROFILE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
