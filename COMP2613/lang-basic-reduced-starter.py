# The theory of languages : Primitive languages and language builders
#--begin
def sepsilon():
    """Input: None
       Output: the empty string
    """
    return ''

def sconcat(a, b):
    """In: strings a and b
       Out:concatenation of a and b
    """
    return a + b

def makeset(l:list)->set:
    """In: a list of strings
       Out: a set (duplicates will be removed, if any
    """
    return set(l)

def lphi():
    """In : None.
       Out: Zero language, i.e. set({}).
    """
    return set({})  # {} could mean dict; so we specifically use set(..)

def lunit():
    """In : None.
       Out: {""} (a language : a set).
    """
    return {""} # Set with epsilon

def lcat(L1,L2):
    """In : L1 (language : a set),
            L2 (language : a set).
       Out: L1 concat L2 (language : a set).
       Example:
       L1 = {'ab', 'bc'} 
       L2 = {'11', 'ab', '22'} 
       lcat(L1,L2) -> {'abab', 'bc22', 'ab11', 'ab22', 'bcab', 'bc11'}
    """
    return {x+y for x in L1 for y in L2}

def lunion(L1,L2):
    """In : L1 (language : a set),
            L2 (language : a set).
       Out: L1 union L2 (language : a set).
    """
    return L1 | L2

def powset(S):
    """In : S (set)
       Out: List of lists representing powerset.
            Since sets/lists are unhashable, we convert the set 
            to a list,perform the powerset operations, leaving 
            the result as a list (can't convert back to a set).
       Example:
       S = {'ab', 'bc'}
       powset(S) -> [['ab', 'bc'], ['bc'], ['ab'], []]
    """
    L=list(S)
    if L==[]:
        return([[]])
    else:
        pow_rest0 = powset(L[1:])
        pow_rest1 = list(map(lambda Ls: [L[0]] + Ls, pow_rest0))
        return(pow_rest0 + pow_rest1)
    
def lint(L1,L2):
    """In : L1 (language : set of strings)
            L2 (language : set of strings)
       Out: L1 intersection L2 (sets of strings)
    """
    return L1 & L2
    
def product(S1,S2):
    """In : S1 (set)
            S2 (set)
       Out: Cartesian product of S1 and S2 (set of pairs)
    """
    return { (x,y) for x in S1 for y in S2 }

#--end

def main():
    print(f"\nSome Operations on Strings\n\n")
    s1 = 'ab'
    s2 = 'ba'
    print(f"Concatenation of s1={s1} and string s2={s2}: {sconcat(s1, s2)}\n")
    print(f"Concatenation of s2={s2} and string s1={s1}: {sconcat(s2, s1)}\n")
    print(f"Concatenation of s2={s2} and the empty-string epsilon: {sconcat(s2, sepsilon())}\n")

    print(f"\nSome Operations on Languages\n\n")
    print(f"Zero Language: {lphi()}\n")
    print(f"Unit Language: {lunit()}\n")
    L1 = {'ab', 'bc'} 
    L2 = {'11', 'ab', '22'} 
    print(f"The Concatenation of languages L1={L1} and L2={L2} is:\n{lcat(L1,L2)}\n")
          #-> {'abab', 'bc22', 'ab11', 'ab22', 'bcab', 'bc11'}

    A = makeset(['a', 'b'])
    print(f"Set A: {A}\n")
    B = makeset(['b', 'c', 'd'])
    print(f"Set B: {B}\n")
    print(f"Intersection of A and B:\n{lint(A,B)}\n")
    print(f"Union of A and B:\n{lunion(A,B)}\n")
    print(f"Cartesian Product of A and B:\n{product(A,B)}\n")
    print(f"Power Set of B:\n{powset(B)}\n")
    
main()
