class Solution {
    canFinish(numCourses, prerequisites) {
        let graph = Array.from({ length: numCourses }, () => []);
        let state = new Array(numCourses).fill(0);

        for (let [course, prereq] of prerequisites) {
            graph[course].push(prereq);
        }

        const dfs = (course) => {
            if (state[course] === 1) return false; // cycle
            if (state[course] === 2) return true;  // already checked

            state[course] = 1;

            for (let prereq of graph[course]) {
                if (!dfs(prereq)) return false;
            }

            state[course] = 2;
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}